import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories,
  );

  const repositories = useTypedSelector(state => state.repositories.data);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  const renderRepositories = () => {
    return repositories.map(repository => (
      <li key={repository}>{repository}</li>
    ));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={term} onChange={onChange} />
        <button type='submit'>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading</h3>}
      {!error && !loading && <ul>{renderRepositories()}</ul>}
    </div>
  );
};

export default RepositoriesList;
