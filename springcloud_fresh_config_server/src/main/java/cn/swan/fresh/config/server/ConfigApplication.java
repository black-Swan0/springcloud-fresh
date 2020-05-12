package cn.swan.fresh.config.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableConfigServer  // 配置文件服务器，从配置中心读取配置文件的
@EnableEurekaClient
public class ConfigApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConfigApplication.class, args);
	}
}
