package dist.com.User.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dist.com.User.feignClient.WorkerFeignClientApiRestRequest;
import dist.com.User.model.User;
import dist.com.User.model.Workers;
import dist.com.User.repository.UserRepository;

@Service
public class UserService {
		
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private WorkerFeignClientApiRestRequest request;
	
	public List<Workers> getWorkersTest() {
		List<Workers> admin=request.getWorkers().getBody();	
		return admin;
	}
	
}
