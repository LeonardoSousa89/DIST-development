package dist.com.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dist.com.User.model.Workers;
import dist.com.User.service.WorkersService;

@RestController
@RequestMapping(value = "/dist/worker")
public class WorkersController {

	@Autowired
	private WorkersService service;
	
	@PostMapping(value = "/{id}/administration")
	public ResponseEntity<Workers> saveWorker(@RequestBody Workers employee){
		service.saveWorker(employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}	
	
	@DeleteMapping(value = "/{id}/administration")
	public ResponseEntity<Void> deleteWorker(@PathVariable Long id) {
		service.deleteWorker(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PutMapping("/{id}/administration")
	public ResponseEntity<Workers> updatetWorker(@PathVariable Long id, @RequestBody Workers employee) {
		service.updatetWorker(id, employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
}
