export interface GithubRepository {

    id:number;

    name:string;

    description:string;

    html_url:string;

    homepage?:string;

    language:string;

    stargazers_count:number;

    forks_count:number;

    updated_at:string;

    topics:string[];

    visibility:'public'|'private';

    featured:boolean;

    fork:boolean;

}