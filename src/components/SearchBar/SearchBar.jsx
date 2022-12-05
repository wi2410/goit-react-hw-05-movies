import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SearchForm, Input, SearchFormButton } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      toast.warn('You have not entered anything, please enter your request!');
      return;
    }
    onSubmit(searchQuery);
  };
  return (
    <>
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleInputChange}
      />
      <SearchFormButton type="submit">
        <span>Search</span>
      </SearchFormButton>
    </SearchForm>
    <ToastContainer autoClose={2000} position="top-center" />
    </>
    
    
  );
};