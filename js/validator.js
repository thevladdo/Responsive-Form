(function (exports) {
  function valOrFunction(val, ctx, args) {
    if (typeof val == "function") {
      return val.apply(ctx, args);
    } else {
      return val;
    }
  }

  function InvalidInputHelper(input, options) {
    input.setCustomValidity(
      valOrFunction(options.defaultText, window, [input])
    );

    function changeOrInput() {
      if (input.value == "") {
        input.setCustomValidity(
          valOrFunction(options.emptyText, window, [input])
        );
      } else {
        input.setCustomValidity("");
      }
    }

    function invalid() {
      if (input.value == "") {
        input.setCustomValidity(
          valOrFunction(options.emptyText, window, [input])
        );
      } else {
        input.setCustomValidity(
          valOrFunction(options.invalidText, window, [input])
        );
      }
    }

    input.addEventListener("change", changeOrInput);
    input.addEventListener("input", changeOrInput);
    input.addEventListener("invalid", invalid);
  }
  exports.InvalidInputHelper = InvalidInputHelper;
})(window);

InvalidInputHelper(document.getElementById("name"), {
  defaultText: "Please enter your real name :)",
  emptyText: "Please enter your real name :)",
  invalidText: function (input) {
    if (input.value.length < 3) {
      return (
        'Your name "' +
        input.value +
        '" is invalid! Must be more than 2 characters :('
      );
    } else if (input.value.length > 20) {
      return (
        'Your name "' +
        input.value +
        '" is invalid! Must be less than 20 characters'
      );
    }
  },
});

InvalidInputHelper(document.getElementById("surname"), {
  defaultText: "Please enter your real surname :)",
  emptyText: "Please enter your real surname :)",
  invalidText: function (input) {
    if (input.value.length < 3) {
      return (
        'Your surname "' +
        input.value +
        '" is invalid! Must be more than 2 characters :('
      );
    } else if (input.value.length > 20) {
      return (
        'Your surname "' +
        input.value +
        '" is invalid! Must be less than 20 characters'
      );
    }
  },
});

InvalidInputHelper(document.getElementById("email"), {
  defaultText: "Please enter an email address!",
  emptyText: "Please enter an email address!",
  invalidText: function (input) {
    return 'The email address "' + input.value + '" is invalid!';
  },
});

InvalidInputHelper(document.getElementById("password"), {
  defaultText: "Please enter a valid password",
  emptyText: "Please enter a valid password",
  invalidText: function (input) {
    if (input.value.length < 8) {
      return "Your password is smaller than 8 characters, add more!";
    } else if (input.valut.length > 50) {
      return "Your password is too long, retry!";
    }
    return "Your password is invalid, retry!";
  },
});
