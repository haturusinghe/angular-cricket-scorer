export class ScoreCard {
  constructor(
    public match_id: string,
    public date: string,
    public description: string,
    public team_one: string,
    public team_two: string,
    public score_card: any
  ) {}
}
