package dist.com.User.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "distUsers")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  userId;
	
	private String name;
	
	@Column(unique = true)
	private String email;
	
	/** A associação para o propósito manyToOne está errada
	 * 
	 * curso: Java COMPLETO Programação Orientada a Objetos +Projetos
	 * aulas: 295 a 312
	 * 
	 */
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "administration",
			joinColumns = @JoinColumn(name = "User_Id"),
			inverseJoinColumns = @JoinColumn(name = "worker_Id"))
	Set <Workers> workers=new HashSet<>();
	
	public User() {}

	public User(long userId, String name, String email) {
		this.userId = userId;
		this.name = name;
		this.email = email;
	}

	public long geUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public Set<Workers> getWorkers() {
		return workers;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (userId ^ (userId >>> 32));
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
		User other = (User) obj;
		if (userId != other.userId)
			return false;
		return true;
	}
}
