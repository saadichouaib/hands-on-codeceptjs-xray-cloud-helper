@nominal_outline
Feature: Google Searching
  As a web surfer,
  I want to search Google,
  so that I can learn new things.

  #@PRECOND_KEY-7003
  Background:
    Given I visit "login"

  Scenario Outline: Cucumber scenario outline test
    Given a web browser is on the Google page
    When the search phrase "<phrase>" is entered
    Then results for "<phrase>" are shown passed
    @passed @TEST_KEY-1139
    Examples:
      | phrase   |
      | panda    |
      | unit     |
      | e2e      |
      | whitebox |

  Scenario Outline: Cucumber scenario outline test
    Given a web browser is on the Google page
    When the search phrase "<phrase>" is entered
    Then results for "<phrase>" are shown failed
    @failed @TEST_KEY-1148
    Examples:
      | phrase   |
      | panda    |
      | unit     |
      | e2e      |
      | whitebox |
