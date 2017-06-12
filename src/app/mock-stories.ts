import { Story } from './story.model';

export const STORIES: Story[] = [
  new Story('Salaries of 100+ Software Engineers, Including Google, Amazon, Grand Rounds',
   'https://docs.google.com/spreadsheets/d/1JR4KrVH1dygniLiLFAMTvdSp5gGLVKKkOxBYiPQagvE/edit#gid=0',
   'tmeyster',
   'show',
    1 ),
  new Story('	Uber CEO Kalanick likely to take leave',
   'http://www.reuters.com/article/us-uber-board-vote-idUSKBN1930AA',
   'pdelbarba', 'show', 2),
  new Story('Weight Training Is the Best Exercise for Bone Strength',
  'http://time.com/4803697/bodybuilding-strength-training/?utm_source=pocket&utm_medium=email&utm_campaign=pockethits',
   'deegles', 'jobs', 3),
  new Story('#c0ffee is the color', 'http://c0ffee.surge.sh/', 'pavel_lishin', 'ask', 4)
];
