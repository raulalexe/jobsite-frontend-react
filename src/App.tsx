import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Advertisments from './components/Advertisments';
import Jobs from './components/Jobs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import About from './components/About';
// import Contact from './components/Contact';
import DetailedJobItem from './components/DetailedJobItem';
import { API_URL, DEFAULT_LANGUAGE, LOCALSTORAGE_KEY, SearchData } from './Models';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import RemoteJobs from './components/RemoteJobs';


class App extends React.Component<any, any> {
  themeOptions: any = {
    palette: {
      primary: {
        main: "#337ab7"
      },
      seconday: {
        main: "#fff"
      }
    },
    typography: { useNextVariants: true }
  };
  theme = createMuiTheme(this.themeOptions);


  constructor(props: any){
    super(props);
    this.state = { jobCount: '', jobs: null };
    this.searchFunc = this.searchFunc.bind(this);
  }

  async componentDidMount(){
    const response = await fetch(`${API_URL}/jobcount`);
    const data = await response.json();
    this.setState({jobCount: data.count});
  }

  async searchFunc(searchText: string, location: string, searchLang: string, skip = 0, get = 10){
    const language = searchLang === DEFAULT_LANGUAGE ? '' : searchLang;
    const resp = await fetch(`${API_URL}/jobs/?keywords=${searchText}&location=${location}&lang=${language}&skip=${skip}&get=${get}`);
    const jobData = await resp.json();
    const searchData: SearchData = {searchText, location, language}; 
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(searchData));
    this.setState({jobs: jobData.jobs.docs, searchData });
  }

  public render() {
    return (
      <div>
          <MuiThemeProvider theme={this.theme}>
          <BrowserRouter>
            <div>
            <Header jobCount={this.state.jobCount} searchFunc={this.searchFunc}></Header>
              <Switch>
                <Route exact path='/' render={(props) => <Jobs jobsList={this.state.jobs} {...props} /> }/> 
                <Route exact path='/jobs' render={(props) => <Jobs jobsList={this.state.jobs} {...props} /> }/>
                <Route path='/jobs/:jobId' component={DetailedJobItem}/>
                <Route path='/remotejobs' render={(props) => <RemoteJobs jobsList={this.state.jobs} searchFunc={this.searchFunc} {...props} /> }/>
              </Switch>
            </div>
          </BrowserRouter>
          <Advertisments />
          <Footer></Footer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
