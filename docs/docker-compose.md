 # Configuración adicional de docker compose
 Configuración adicional de docker compose que no se utilizó.
 
```yaml
  postgres:
    image: postgres:alpine
    network_mode: bridge
    restart: always
    environment:
      - DB_USER=postgres
      - DB_PASS=postgres
      - POSTGRES_PASSWORD=postgres

  adminer:
    image: adminer
    network_mode: bridge
    restart: always
    ports:
        - 8081:8080


  # agent:
  #   container_name: newrelic-infra
  #   build:
  #     context: .
  #     dockerfile: newrelic-infra.dockerfile
  #   cap_add:
  #     - SYS_PTRACE
  #   network_mode: bridge
  #   pid: host
  #   privileged: true
  #   volumes:
  #     - "/:/host:ro"
  #     - "/var/run/docker.sock:/var/run/docker.sock"
  #   restart: unless-stopped

#   jenkins:
#     image: jenkins/jenkins:lts-jdk11
#     ports:
#       - 8081:8080
#     volumes:
#       - ./jenkins_home:/var/jenkins_home
# volumes:
#   jenkins_home:
#     external: true
```