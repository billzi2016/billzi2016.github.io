export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer", "screen", "config"],
      },
    ],
    "selector-class-pattern": null,
    "no-descending-specificity": null,
  },
};
