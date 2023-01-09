package dist.com.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dist.com.User.model.User;
import dist.com.User.model.Workers;
import dist.com.User.service.UserService;

@RestController
@RequestMapping(value = "/dist/worker")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping(value = "/{id}/administration")
	private ResponseEntity<User> getUser(@PathVariable Long id){
		User admin = service.getUser(id);
		return ResponseEntity.status(HttpStatus.OK).body(admin);
	}
	
	@PostMapping(value = "/{id}/administration")
	public ResponseEntity<Workers> saveWorker(@RequestBody Workers employee){
		service.saveWorker(employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	
	/*
	 * 
	 * 
	 * @Autowired
	//private WorkersService service;
	private UserService service;
	
	@PostMapping(value = "/insert")
	public ResponseEntity<Workers> saveWorker(@RequestBody Workers employee){
		service.saveWorker(employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	
	@DeleteMapping(value = "/{id}/administration")
	public ResponseEntity<Void> deleteWorker(@PathVariable Long id) {
		service.deleteWorker(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PutMapping("/{id}/update")
	public ResponseEntity<Workers> updatetWorker(@PathVariable Long id, @RequestBody Workers employee) {
		service.updatetWorker(id, employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	 * 
	 * 
	 * 
	 * */
	
}
