package dist.com.User.feignClient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import dist.com.User.model.Workers;

@Component
@FeignClient(name = "Worker")
public interface WorkerFeignClientApiRestRequest {
	
	@GetMapping(value = "/get-workers")
	public ResponseEntity<List<Workers>> getWorkers();
	
}
