package dist.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class WorkersApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkersApplication.class, args);
	}

}
