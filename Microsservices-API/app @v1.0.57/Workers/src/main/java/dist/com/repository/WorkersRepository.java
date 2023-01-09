package dist.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dist.com.models.Workers;

@Repository
public interface WorkersRepository extends JpaRepository<Workers, Long>{

}
