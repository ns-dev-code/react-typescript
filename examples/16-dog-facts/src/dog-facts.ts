import shuffle from 'lodash/shuffle';
import { data } from './data';

/**
 * Type of DogFact, it consist of ID and Fact.
 */
export type DogFactType = {
  id: number;
  fact: string;
};

// These are here just in case the API goes down. 🤷
/**
 *
 * @param n
 * @returns List of [ Dog Facts ] based on the required fact count.
 */
export const fetchDogFacts = (n: number) => {
  return Promise.resolve(data).then((facts) => shuffle(facts).slice(0, n));
};
