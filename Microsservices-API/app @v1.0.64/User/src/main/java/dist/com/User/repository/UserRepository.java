package dist.com.User.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dist.com.User.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
