package cbr.weight;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface WeightRepository extends JpaRepository<Weight, Integer> {

    @Query("Select w from Weight w where date between :dateFrom and :dateTo order by date")
    public List<Weight> findWeightsBetweenDates(@Param("dateFrom") LocalDate dateFrom, @Param("dateTo") LocalDate dateTo);
}
