package io.pivotal.mastercard.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.ComponentScan;

/**
 * The main entry point for the application
 * @author Brian Jimerson
 *
 */
@SpringBootApplication
@ComponentScan
@EnableAutoConfiguration
@EnableZuulProxy
@EnableDiscoveryClient
public class ApiGatewayApplication {

	/**
	 * Starts the Spring Boot application.
	 * @param args Any command line arguments passed.
	 */
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}
