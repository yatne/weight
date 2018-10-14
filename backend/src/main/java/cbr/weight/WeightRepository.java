package cbr.weight;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface WeightRepository extends JpaRepository<Weight, Integer> {

    public Weight findByDate(LocalDate date);

    @Modifying
    @Query("update Weight w set w.weight = :newWeight where w.date = :date")
    public void updateWeightByDate( @Param("date") LocalDate date, @Param("newWeight") Float newWeight);

    @Query("Select w from Weight w where date between :dateFrom and :dateTo order by date")
    public List<Weight> findWeightsBetweenDates(@Param("dateFrom") LocalDate dateFrom, @Param("dateTo") LocalDate dateTo);
}
