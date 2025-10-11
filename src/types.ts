export type GameType = {
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    title: string;
}

export type MinimumSystemRequirementsType = {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

export type ScreenshotsType = {
    id: number;
    image: string;
}

export type GameInfoType = GameType & {
    description: string;
    minimum_system_requirements: MinimumSystemRequirementsType;
    screenshots: ScreenshotsType[];
    status: string;
}