import { ReactNode } from 'react';

export interface JobsProps{
  jobsList: JobItemProps[];
}

export interface RemoteJobsProps extends JobsProps, SearchProps{}

export interface JobItemProps {
  title: string;
  location: string;
  company: string;
  type: 'Full time' | 'Part time' | 'Remote';
  id: string;
}

export interface DetailedJobItemModel {
  title: string;
  location: string;
  company: string;
  type: 'Full time' | 'Part time' | 'Remote';
  id: string;
  postDate: Date;
  source: string;
  description: string;
  url: string;
}

export interface JobPagetTitleProps{
  hasJobs: boolean;
  hasFinishedSearching: boolean;
}

export interface ConditionalDisplayProps{
  showCondition: boolean;
  children: ReactNode;
}

export interface SearchData{
  searchText: string;
  location: string;
  language: string;
}

export const API_URL = 'http://findthejob4u.com:8080/api';
// const API = "http://127.0.0.1:8080/api"; 
export const DEFAULT_LANGUAGE = 'any_language';
export const LOCALSTORAGE_KEY = 'jobSearchData';

export interface SearchProps{
  searchFunc: Function;
}