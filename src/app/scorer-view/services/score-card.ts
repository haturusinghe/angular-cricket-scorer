export class ScoreCard {
  constructor(
    public matchId: string,
    public createdTime: string,
    public status: string,
    public teamAName: string,
    public teamBName: string,
    public scoreCard: any
  ) {}
}
