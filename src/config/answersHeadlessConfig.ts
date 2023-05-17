
export const AnswerExperienceConfig = {
  limit:5,
  locale: "en",
  apiKey : "e95d273816ad8f56eda328a494441082",
  verticalKey : "locations",
  experienceKey : "test",
  experienceVersion: "STAGING",
  locationRadius: 804672,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
}