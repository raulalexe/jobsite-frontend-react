import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Advertisments from './components/Advertisments';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import DetailedJobItem from './components/DetailedJobItem/DetailedJobItem';
import { API_URL, DEFAULT_LANGUAGE, LOCALSTORAGE_KEY, SearchData, DEAFULT_SEARCH_DATA, DEFAULT_NUMBER_OR_SEARCH_RESULTS } from './Models';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Maintenance from './components/Maintenance/Maintenance';
import Jobs from './components/Jobs/Jobs';
import BackToTop from './components/BackToTop/BackToTop';

class App extends React.Component<any, any> {
  themeOptions: any = {
    palette: {
      primary: {
        main: "#55595c"
      },
      secondary: {
        main: "#337ab7"

      }
    },
    typography: { useNextVariants: true }
  };
  theme = createMuiTheme(this.themeOptions);


  constructor(props: any){
    super(props);
    this.state = { jobCount: '', jobs: null, searchData: this.getSavedSearchData(), searchResultsCount: 0, isSearching: false };
    this.searchFunc = this.searchFunc.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  getSavedSearchData = () => {
    const savedSearchData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsed: SearchData =  savedSearchData ? JSON.parse(savedSearchData) : DEAFULT_SEARCH_DATA;
    // Set '' to prevent corrupted data sending undefined
    parsed.language = parsed.language ? parsed.language : '';
    parsed.searchText = parsed.searchText ? parsed.searchText : '';
    parsed.location = parsed.location ? parsed.location : '';
    return parsed;
  }

  async componentDidMount(){
    const response = await fetch(`${API_URL}/jobcount`);
    const data = await response.json();
    this.setState({jobCount: data.count});
    this.searchFunc(this.state.searchData.searchText, this.state.searchData.location, this.state.searchData.language);
  }

  async searchFunc(searchText: string, location: string, searchLang: string, offset = 0, get = DEFAULT_NUMBER_OR_SEARCH_RESULTS){
    this.setState({isSearching: true});
    const language = searchLang === DEFAULT_LANGUAGE ? '' : searchLang;
    const resp = await fetch(`${API_URL}/jobs/?keywords=${searchText}&location=${location}&lang=${language}&skip=${offset}&get=${get}`);
    const jobData = await resp.json();
    const searchData: SearchData = {searchText, location, language, offset}; 
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(searchData));

    this.setState({jobs: jobData.jobs.docs, searchData, searchResultsCount: jobData.jobs.total, offset, isSearching: false});
  }

  async changePage(offset: number){
    this.searchFunc(this.state.searchData.searchText, this.state.searchData.location, this.state.searchData.language, offset);
  }

  public render() {
    return (
      <div>
          <MuiThemeProvider theme={this.theme}>
          <BrowserRouter>
            <div>
            <Header jobCount={this.state.jobCount} searchFunc={this.searchFunc} searchData={this.state.searchData}></Header>
              <Switch>
                <Route exact path='/' render={() => 
                  <Jobs jobsList={this.state.jobs} 
                    changePageFunc={this.changePage}
                    searchResultsCount={this.state.searchResultsCount} 
                    offset={this.state.offset}
                    isSearching={this.state.isSearching}></Jobs> 
                } />             
                <Route path='/jobs/:jobId' component={ DetailedJobItem } />
                <Route path='/maintenance' component={Maintenance} />
                <Route render={() => <Redirect to="/" /> } />
              </Switch>
            </div>
          </BrowserRouter>
          <Advertisments />
          <Footer></Footer>
          <BackToTop></BackToTop>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
