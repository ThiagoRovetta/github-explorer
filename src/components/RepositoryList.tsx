import { useState, useEffect } from 'react';
import RespositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
      <section className="repositoryList">
          <h1>Lista de repositórios</h1>

          <ul>
            {repositories.map((repository) => {
              return (
                <RespositoryItem key={repository.name} repository={repository} />
              )
            })}
          </ul>
      </section>
  )
}

export default RepositoryList;