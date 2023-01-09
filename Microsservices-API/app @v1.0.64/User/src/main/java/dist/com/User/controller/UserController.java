package dist.com.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dist.com.User.model.User;
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
	
	
	
	//em teste
	/*@Autowired
	private WorkersService workerservice;
	
	@GetMapping(value = "/{id}/administration/filter")
	public ResponseEntity<Workers> findByWorker(@PathVariable Long id, @RequestParam("workerName") Workers workername){
		Workers employee=workerservice.findByWorker(workername);
		return ResponseEntity.status(HttpStatus.OK).body(employee);
	}*/
	
	
}
