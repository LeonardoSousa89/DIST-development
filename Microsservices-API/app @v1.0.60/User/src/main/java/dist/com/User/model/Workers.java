package dist.com.User.model;

import java.io.Serializable;

import javax.persistence.Access;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "distWorkers")
public class Workers implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  workerId;
	
	private String  workerName;
	
	@Column(unique = true)
	private String  workerEmail;
	
	private String  workerPost;
	private String  workerAddress;
	private String  workerPhoneNumber;
	private String  workerAge;
	
	/** A associação para o propósito manyToOne está errada
	 * 
	 * curso: Java COMPLETO Programação Orientada a Objetos +Projetos
	 * aulas: 295 a 312
	 * 
	 */
	@ManyToOne
	private User admin;
	
	public Workers() {}

	public Workers(long workerId, String workerName, String workerEmail, String workerPost, String workerAddress,
			String workerPhoneNumber, String workerAge, User admin) {
		this.workerId = workerId;
		this.workerName = workerName;
		this.workerEmail = workerEmail;
		this.workerPost = workerPost;
		this.workerAddress = workerAddress;
		this.workerPhoneNumber = workerPhoneNumber;
		this.workerAge = workerAge;
		this.admin = admin;
	}
	
	public Workers(long workerId, String workerName, String workerEmail, String workerPost, String workerAddress,
			String workerPhoneNumber, String workerAge) {
		this.workerId = workerId;
		this.workerName = workerName;
		this.workerEmail = workerEmail;
		this.workerPost = workerPost;
		this.workerAddress = workerAddress;
		this.workerPhoneNumber = workerPhoneNumber;
		this.workerAge = workerAge;
	}

	public long getWorkerId() {
		return workerId;
	}

	public void setWorkerId(long workerId) {
		this.workerId = workerId;
	}

	public String getWorkerName() {
		return workerName;
	}

	public void setWorkerName(String workerName) {
		this.workerName = workerName;
	}

	public String getWorkerEmail() {
		return workerEmail;
	}

	public void setWorkerEmail(String workerEmail) {
		this.workerEmail = workerEmail;
	}

	public String getWorkerPost() {
		return workerPost;
	}

	public void setWorkerPost(String workerPost) {
		this.workerPost = workerPost;
	}

	public String getWorkerAddress() {
		return workerAddress;
	}

	public void setWorkerAddress(String workerAddress) {
		this.workerAddress = workerAddress;
	}

	public String getWorkerPhoneNumber() {
		return workerPhoneNumber;
	}

	public void setWorkerPhoneNumber(String workerPhoneNumber) {
		this.workerPhoneNumber = workerPhoneNumber;
	}

	public String getWorkerAge() {
		return workerAge;
	}

	public void setWorkerAge(String workerAge) {
		this.workerAge = workerAge;
	}

	public User getAdmin() {
		return admin;
	}

	public void setAdmin(User admin) {
		this.admin = admin;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (workerId ^ (workerId >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Workers other = (Workers) obj;
		if (workerId != other.workerId)
			return false;
		return true;
	}
}
