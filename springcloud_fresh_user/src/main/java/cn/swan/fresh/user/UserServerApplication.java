package cn.swan.fresh.user;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@MapperScan("cn.swan.fresh.user.mapper")
@SpringBootApplication
@EnableEurekaClient
@EnableRedisHttpSession
public class UserServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(UserServerApplication.class, args);
	}
}
