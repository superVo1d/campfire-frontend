import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserEditable, UserInterface } from '../../@types/user';
import { UsersInterface } from '../../@types/users';
import { LikeInterface } from '../../@types/like';
// import { initData as initDataMock } from '../../mocks/telegram';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiBaseUrl = '/api';

  private _token!: string;

  private http = inject(HttpClient);

  get authOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this._token}`
    });

    return { headers };
  }

  public auth(initData: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${initData}`
    });

    const requestOptions = { headers };

    return this.http.post<{ access_token: string }>(`${this._apiBaseUrl}/auth`, null, requestOptions).pipe(
      tap((data: { access_token: string }) => {
        this._token = data.access_token;
      })
    );
  }

  public getUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this._apiBaseUrl}/user`, this.authOptions);
  }

  public getUsers(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(`${this._apiBaseUrl}/users`, this.authOptions);
  }

  public likeUser(id: number): Observable<LikeInterface> {
    return this.http.post<LikeInterface>(`${this._apiBaseUrl}/like?id=${id}`, null, this.authOptions);
  }

  public updateUser(values: UserEditable): Observable<UserInterface> {
    return this.http.patch<UserInterface>(`${this._apiBaseUrl}/user`, { ...values }, this.authOptions);
  }
}
