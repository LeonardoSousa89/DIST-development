package dist.com.User.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dist.com.User.model.User;
import dist.com.User.model.Workers;
import dist.com.User.repository.UserRepository;
import dist.com.User.repository.WorkersRepository;

@Service
public class UserService {
		
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private WorkersRepository workerRepository;
	
	public User getUser(Long id) {
		User admin=repository.findById(id).get();
		return admin;
	}
	
	public Workers saveWorker(Workers employee) {
		return workerRepository.save(employee);
	}
	
	public Workers getWorkerById(Long id) {
		return workerRepository.findById(id).get();
	}
	
	/*public Workers getWorkerById(Long id) {
		return repository.findById(id).get();
	}
	
		
	public void deleteWorker(Long id) {
		workerRepository.deleteById(id);
	}
	
	public Workers saveWorker(Workers employee) {
		return repository.save(employee);
	}
	
	public void deleteWorker(Long id) {
		repository.deleteById(id);
	}
	
	private void updateData(Workers updatedEmployee, Workers employee) {
		updatedEmployee.setWorkerName(employee.getWorkerName());
		updatedEmployee.setWorkerEmail(employee.getWorkerEmail());
		updatedEmployee.setWorkerPost(employee.getWorkerPost());
		updatedEmployee.setWorkerAddress(employee.getWorkerAddress());
		updatedEmployee.setWorkerPhoneNumber(employee.getWorkerPhoneNumber());
		updatedEmployee.setWorkerAge(employee.getWorkerAge());
	}
	
	public Workers updatetWorker(Long id, Workers employee) {
		Workers updatedEmployee=getWorkerById(id);
			updateData(updatedEmployee, employee);
			return repository.save(updatedEmployee);
	}*/
	
}
