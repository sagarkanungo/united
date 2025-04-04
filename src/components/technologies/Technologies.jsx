import React from "react";
import "./technologies.css";

// Sample technology data (replace logos with your actual logo URLs)
const technologies = {
  frontend: [
    { name: "React", logo: "react.png" },
    { name: "Angular", logo: "ang.png" },
    { name: "Vue.js", logo: "vue.png" },
    { name: "Next.js", logo: "nextjs-icon.png" },
    { name: "Tailwind CSS", logo: "tw7.png" },
    { name: "HTML5", logo: "/html-icon-1.png" },
    { name: "CSS3", logo: "css-icon.png" },
    { name: "JavaScript", logo: "js.png" },
    { name: "TypeScript", logo: "ts.png" },
    { name: "Bootstrap", logo: "bt2.png" },

  ],
  backend: [
    { name: "Node.js", logo: "nodejs-icon.png" },
    { name: "Python", logo: "python-programming-language-icon.png" },
    { name: "Java", logo: "java-programming-language-icon.png" },
    { name: "Ruby on Rails", logo: "ruby-on-rails-icon.png" },
    { name: "PHP", logo: "PHP-logo.png" },

    // { name: "Flask", logo: "/logos/flask.png" },
    // { name: "Spring Boot", logo: "/logos/spring.png" },
    // { name: "Laravel", logo: "/logos/laravel.png" },
    // { name: "ASP.NET", logo: "/logos/aspnet.png" },
    // { name: "Go", logo: "/logos/go.png" },
  ],
  mobile: [
    { name: "Swift", logo: "Swift_logo.png" },
    { name: "Kotlin", logo: "kotlin-programming-language-icon.png" },
    { name: "Flutter", logo: "flutter-icon.png" },
    { name: "React Native", logo: "react (1).png" },
    { name: "Ionic", logo: "ionic-icon.png" },
    // { name: "Ionic", logo: "/logos/ionic.png" },
    // { name: "Java", logo: "/logos/java.png" },
    // { name: "Objective-C", logo: "/logos/objective-c.png" },
    // { name: "Cordova", logo: "/logos/cordova.png" },
    // { name: "Firebase", logo: "/logos/firebase.png" },
  ],
  database: [
    { name: "MongoDB", logo: "1012822_code_development_logo_mongodb_programming_icon.png" },
    { name: "MySQL", logo: "mysql_icon.png" },
    { name: "PostgreSQL", logo: "PostgreSQL.png" },
    { name: "SQLite", logo: "sqlLight.png" },
    { name: "Redis", logo: "4691219_redis_icon.png" },

    // { name: "Oracle", logo: "/logos/oracle.png" },
    // { name: "Cassandra", logo: "/logos/cassandra.png" },
    // { name: "Elasticsearch", logo: "/logos/elasticsearch.png" },
    // { name: "DynamoDB", logo: "/logos/dynamodb.png" },
    // { name: "Firebase", logo: "/logos/firebase.png" },
  ],
  cloudDevOps: [
    { name: "AWS", logo: "abf067f3bef03527c829cc1ee52768d5.png" },
    { name: "Azure", logo: "azure.png" },
    { name: "Google Cloud", logo: "googlecloude.png" },
    { name: "Docker", logo: "docker.png" },
    { name: "Kubernetes", logo: "Kubernetes.png" },
    // { name: "Terraform", logo: "/logos/terraform.png" },
    // { name: "Jenkins", logo: "/logos/jenkins.png" },
    // { name: "GitLab CI/CD", logo: "/logos/gitlab.png" },
    // { name: "CircleCI", logo: "/logos/circleci.png" },
    // { name: "Ansible", logo: "/logos/ansible.png" },
  ],
};

const Technologies = () => {
  return (
    <div className="technologies-container">
      <h2 className="tech-heading">Innovative Technologies We Excel In</h2>
      <p className="tech-description">
        Explore a world of cutting-edge technologies that drive modern
        solutions. Our expertise spans across a diverse range of tools and
        frameworks to bring your ideas to life.
      </p>

      {Object.keys(technologies).map((category, index) => (
        <div key={index} className="tech-section">
       <h3 className="tech-category-title">
  {category.replace(/([A-Z])/g, " $1").trim().replace(/^./, (match) => match.toUpperCase())} Technologies
</h3>

          <div className="tech-grid">
            {technologies[category].map((tech, i) => (
              <div key={i} className="tech-card">
                <img src={tech.logo} alt={tech.name} className="tech-logo" />
                <h4>{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
