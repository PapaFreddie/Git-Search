import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getRepolist(
    ordering: string,
    search?: string

  ):
  Observable<APIResponse<Repo>>{
    let params = new HttpParams().set('ordering', ordering);
    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Repo>>('${env.BASE-URL}/repos', {
      params: params,

    }
    );

  }
}
