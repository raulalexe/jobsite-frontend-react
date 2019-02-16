import { ReactNode } from 'react';

export interface JobsProps{
  jobsList: JobItemProps[];
  changePageFunc: Function;
  searchResultsCount: number;
  offset: number;
  isSearching: boolean;
}

export interface JobItemProps {
  title: string;
  location: string;
  company: string;
  type: 'Full time' | 'Part time' | 'Remote';
  id: string;
}

export interface DetailedJobItemModel extends JobItemProps {
  postDate: Date;
  source: string;
  description: string;
  url: string;
}

export interface JobPagetTitleProps{
  hasJobs: boolean;
  isSearching: boolean;
  searchResultsCount: number;
}

export interface ConditionalDisplayProps{
  showCondition: boolean;
  children: ReactNode;
  className?: string;
}

export interface SearchData{
  searchText: string;
  location: string;
  language: string;
  offset: number;
}

export const API_URL = 'http://findthejob4u.com:8080/api';
// const API = "http://127.0.0.1:8080/api"; 
export const DEFAULT_LANGUAGE = 'any_language';
export const LOCALSTORAGE_KEY = 'jobSearchData';
export const DEAFULT_SEARCH_DATA = { searchText: '', location: '', language: ''};
export const DEFAULT_NUMBER_OR_SEARCH_RESULTS = 10;

export interface SearchProps{
  searchFunc: Function;
  searchData: SearchData;
}

export interface HeaderProps extends SearchProps{ 
  jobCount: string;
}
