package dist.com.User.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dist.com.User.model.User;
import dist.com.User.repository.UserRepository;

@Service
public class UserService {
		
	@Autowired
	private UserRepository repository;
	
	//@Autowired
	//private WorkersRepository workerRepository;
	
	public User getUser(Long id) {
		User admin=repository.findById(id).get();
		return admin;
	}
	
}
