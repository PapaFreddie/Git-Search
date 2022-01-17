export interface Repo {
    background_image: string;
    name: string;
    day: string;
    updated: string;
    recent: string;
    metacritic: string;
    parent_platforms: Array<ParentPlatforms>;
    publishers: Array<publishers>;
    screenshots: Array<Screenshots>;
    demos: Array<Demos>;
    types: Array<Types>;



}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Tpye{
    name: string;
}

interface ParentPlatform{
    Platform: {
        name: string;
    };
}

interface Publishers {
    name: string;
}

interface screenshots{
    image: string;
}

interface Demo{
    data: {
        max: string;
    };
}