import * as React from "react";
import { TextField, InputAdornment, MenuItem, Button, Card } from "@material-ui/core";
import { Search as SearchIcon, LocationOn, Flag } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import { API_URL, SearchData } from 'src/Models';
import { SearchProps, DEFAULT_LANGUAGE } from '../../Models';
import './Search.css';

const Search = (props: SearchProps) => {
  
  const defaultLanguage = { label: "Any Language", value: DEFAULT_LANGUAGE };

  const handleKeyPress = (event: any) => {
    if (event.key == 'Enter') {
      props.searchFunc(searchText, location, selectedLanguage.value)
    }
  };

  const doSearch = (data: SearchData) => {
    if(data){
      setSearchText(data.searchText);
      setLocation(data.location);
      const selectedLang = languages.find(l => l.value === data.language); 
      const langObj = data.language ? {label: data.language, value: data.language} : defaultLanguage;
      setSelectedLanguage(selectedLang ? selectedLang : langObj);
      // props.searchFunc(data.searchText, data.location, data.language);
    }
  }

  const [languages, setLanguages] = useState([defaultLanguage]);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [location, setLocation] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    (async () => {
      const resp = await fetch(`${API_URL}/jobLangs`);
      const langData = await resp.json();
      const languages = [{ label: "Any Language", value: "any_language" }];
      langData.languages.map((l: string) => languages.push({ label: l, value: l}));
      setLanguages(languages);
    })();
  },[]);

  useEffect(() => {
    doSearch(props.searchData);
  }, [props.searchData.searchText, props.searchData.location, props.searchData.language]);

  return (
    <div className="search-form">
        <Card className="card-style">
          <TextField
            label="Job title, skills"
            value={searchText}
            onChange={ (event) => setSearchText(event.target.value)}
            onKeyPress={handleKeyPress}
            className="form-input"
            autoFocus={false}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="input-inner-icon">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Location"
            value={location}
            onChange={ (event) => setLocation(event.target.value)}
            onKeyPress={handleKeyPress}
            className="form-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="input-inner-icon">
                  <LocationOn />
                </InputAdornment>
              )
            }}
          />
          <TextField
            select
            label="Language"
            value={selectedLanguage.value}
            className='language-picker form-input'
            onChange={(event) => {
              setSelectedLanguage({value: event.target.value, label: event.target.value});
            }}
            onKeyPress={handleKeyPress}            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className="input-inner-icon">
                  <Flag />
                </InputAdornment>
              )
            }}
          >
            {languages.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button 
          variant="contained" 
          color="secondary" 
          className="search-btn" 
          onClick={() => props.searchFunc(searchText, location, selectedLanguage.value)}>
            Search
          </Button>
        </Card>
    </div>
  );
}

export default Search;
