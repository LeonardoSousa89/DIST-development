package dist.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dist.com.models.Workers;
import dist.com.service.WorkersService;

@RestController
@RequestMapping(value = "/workers")
public class WorkersController {

	@Autowired
	private WorkersService service;
	
	@GetMapping(value = "/get-workers")
	public ResponseEntity<List<Workers>> getWorkers(){
		List <Workers> employees=service.getWorkers();
		return ResponseEntity.status(HttpStatus.OK).body(employees);
	}
	
	@PostMapping(value = "/insert")
	public ResponseEntity<Workers> saveWorker(@RequestBody Workers employee){
		service.saveWorker(employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping(value = "/{id}/delete")
	public ResponseEntity<Void> deleteWorker(@PathVariable Long id) {
		service.deleteWorker(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PutMapping("/{id}/update")
	public ResponseEntity<Workers> updatetWorker(@PathVariable Long id, @RequestBody Workers employee) {
		service.updatetWorker(id, employee);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
