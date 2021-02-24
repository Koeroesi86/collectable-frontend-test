import {useReducer} from "react";
import {Feedback} from "./use-asset-stack";
import {AssetTag} from "../configuration/asset-seed";

export interface FeedbackProfile {
  likes: Set<AssetTag>;
  dislikes: Set<AssetTag>;
  neutral: Set<AssetTag>;
}

export interface Action {
  feedback: Feedback;
  tags: AssetTag[];
}

const initialState: FeedbackProfile = {
  likes: new Set<AssetTag>(),
  dislikes: new Set<AssetTag>(),
  neutral: new Set<AssetTag>(),
};

export const useFeedbackReducer = () => useReducer((state: FeedbackProfile, action: Action) => {
  const dislikes = new Set<AssetTag>(state.dislikes);
  const likes = new Set<AssetTag>(state.likes);
  const neutral = new Set<AssetTag>(state.likes);

  if (action.feedback === Feedback.Like) {
    action.tags.forEach((tag) => {
      if (dislikes.has(tag) || neutral.has(tag)) {
        likes.delete(tag);
        dislikes.delete(tag);
        neutral.add(tag);
      } else {
        likes.add(tag);
      }
    });
  }

  if (action.feedback === Feedback.Dislike) {
    action.tags.forEach((tag) => {
      if (likes.has(tag) || neutral.has(tag)) {
        likes.delete(tag);
        dislikes.delete(tag);
        neutral.add(tag);
      } else {
        dislikes.add(tag);
      }
    });
  }

  return {
    likes,
    dislikes,
    neutral,
  }
}, initialState);
