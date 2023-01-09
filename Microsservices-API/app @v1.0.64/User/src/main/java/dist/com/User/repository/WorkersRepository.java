package dist.com.User.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dist.com.User.model.Workers;

@Repository
public interface WorkersRepository extends JpaRepository<Workers, Long>{
	
}
