FROM openjdk:8-jre-alpine
ADD target/weight-1.0-SNAPSHOT.jar weight.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "weight.jar"]