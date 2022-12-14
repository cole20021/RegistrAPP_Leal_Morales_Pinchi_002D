
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }

  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6879f99127824d288256ac253aeae141')
  }
}
