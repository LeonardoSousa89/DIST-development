package dist.com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dist.com.models.Workers;
import dist.com.repository.WorkersRepository;

@Service
public class WorkersService {
	
	@Autowired
	private WorkersRepository repository;
	
	public List<Workers> getWorkers() {
		List<Workers> employees=repository.findAll();
		return employees;
	}
	
	public Workers getWorkerById(Long id) {
		return repository.findById(id).get();
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
	}
	
	
}
