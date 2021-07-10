import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  const renderRepositories = () => {
    return data.map(repository => <li className="list-group-item" key={repository}>{repository}</li>);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <input
            className='form-control'
            type='text'
            value={term}
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </div>
      </form>
      {error && <h3>{error}</h3>}
      {loading && (
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
      {!error && !loading && <ul className="list-group">{renderRepositories()}</ul>}
    </div>
  );
};

export default RepositoriesList;
