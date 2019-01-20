import * as React from "react";
import { TextField, InputAdornment, MenuItem, Button, Card } from "@material-ui/core";
import { Search as SearchIcon, LocationOn, Flag } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import { API_URL, SearchData, LOCALSTORAGE_KEY } from 'src/Models';
import { SearchProps, DEFAULT_LANGUAGE } from '../Models';

const Search = (props: SearchProps) => {
  const searchFormStyle = {
    marginTop: "66px"
  };

  const searchBtnStyle = {
    height: "56px",
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4'
  };  

  const cardStyle = {
    padding: '10px 0',
    maxWidth: '800px',
    margin: '0 auto'
  }
  const defaultLanguage = { label: "Any Language", value: DEFAULT_LANGUAGE };

  const getSavedSearchData = () => {
    const savedSearchData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsed: SearchData =  savedSearchData ? JSON.parse(savedSearchData) : { searchText: '', location: '', language: ''};
    // Set '' to prevent corrupted data sending undefined
    parsed.language = parsed.language ? parsed.language : '';
    parsed.searchText = parsed.searchText ? parsed.searchText : '';
    parsed.location = parsed.location ? parsed.location : '';
    return parsed;
  }

  const doSearch = (data: SearchData) => {
    if(data){
      setSearchText(data.searchText);
      setLocation(data.location);
      const selectedLang = languages.find(l => l.value === data.language); 
      setSelectedLanguage(selectedLang ? selectedLang : defaultLanguage);
      props.searchFunc(data.searchText, data.location, data.language);
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

      const savedSearchData = getSavedSearchData();
      doSearch(savedSearchData);
    })();
  }, []);

  return (
    <div style={searchFormStyle}>
        <Card style={cardStyle}>
          <TextField
            label="Job title, skills"
            variant="outlined"
            value={searchText}
            onChange={ (event) => setSearchText(event.target.value)}
            id="mui-theme-provider-outlined-input"
            autoFocus={false}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={ (event) => setLocation(event.target.value)}
            id="mui-theme-provider-outlined-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationOn />
                </InputAdornment>
              )
            }}
          />
          <TextField
            select
            variant="outlined"
            label={selectedLanguage.label}
            value={selectedLanguage.value}
            onChange={(event) => {
              setSelectedLanguage({value: event.target.value, label: event.target.value});
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
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

          <Button variant="contained" color="primary" style={searchBtnStyle} onClick={() => props.searchFunc(searchText, location, selectedLanguage.value)}>
            Search
          </Button>
        </Card>
    </div>
  );
}

export default Search;
