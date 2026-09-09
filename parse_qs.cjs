const fs = require('fs');

const questionsText = `
1. Which one is the correct sentence?
(a) I do not want nothing.
(b) He is one of the best boy in the class.
(c) He do not always go there.
(d) He can not but go there.
ANS: 3

2. Which one is the correct sentence?
(a) One of my friends are a talented doctor.
(b) One of my friends is a talented doctor.
(c) One of my friend is a talented doctor.
(d) One of my friend are a talented doctor.
ANS: 1

3. Which one is the correct sentence?
(a) Neither he nor his brothers is present today.
(b) Neither he nor his brothers are present today.
(c) Neither his brothers nor he are present today.
(d) Neither he or his brothers are present today.
ANS: 1

4. Which one is the correct sentence?
(a) Either the manager or the clerks has stolen the files.
(b) Either the manager nor the clerks have stolen the files.
(c) Either the manager or the clerks have stolen the files.
(d) Either the manager or the clerks was stolen the files.
ANS: 2

5. Which one is the correct sentence?
(a) The quality of these mangoes are not good.
(b) The quality of these mangoes is not good.
(c) The quality for these mangoes are not good.
(d) The quality on these mangoes were not good.
ANS: 1

6. Which one is the correct sentence?
(a) Bread and butter are my favorite breakfast.
(b) Bread and butter is my favorite breakfast.
(c) Bread and butter have my favorite breakfast.
(d) Bread and butter were my favorite breakfast.
ANS: 1

7. Which one is the correct sentence?
(a) The jury were unanimous in its decision.
(b) The jury was divided in their opinions.
(c) The jury was unanimous in its decision.
(d) The jury have unanimous in its decision.
ANS: 2

8. Which one is the correct sentence?
(a) More than one boy was present in the meeting.
(b) More than one boy were present in the meeting.
(c) More than one boys was present in the meeting.
(d) More than one boys were present in the meeting.
ANS: 0

9. Which one is the correct sentence?
(a) Fifty miles are a long distance to walk.
(b) Fifty miles is a long distance to walk.
(c) Fifty miles were a long distance to walk.
(d) Fifty miles have a long distance to walk.
ANS: 1

10. Which one is the correct sentence?
(a) Many a student have tried to solve the problem.
(b) Many a students has tried to solve the problem.
(c) Many a student has tried to solve the problem.
(d) Many student has tried to solve the problem.
ANS: 2

11. Which one is the correct sentence?
(a) The price of rice is rising high.
(b) The price of rice are rising high.
(c) The prices of rice is rising high.
(d) The price of rices are rising high.
ANS: 0

12. Which one is the correct sentence?
(a) The rich is not always happy.
(b) The rich are not always happy.
(c) Rich are not always happy.
(d) The rich is not happy always.
ANS: 1

13. Which one is the correct sentence?
(a) Physics are a difficult subject for many students.
(b) Physics is a difficult subject for many students.
(c) Physics were a difficult subject for many students.
(d) Physics have a difficult subject for many students.
ANS: 1

14. Which one is the correct sentence?
(a) Every man, woman, and child were rescued.
(b) Every man, woman, and child was rescued.
(c) Every man, woman, and child have rescued.
(d) Every man, woman, and child are rescued.
ANS: 1

15. Which one is the correct sentence?
(a) Time and tide wait for no man.
(b) Time and tide waits for no man.
(c) Time and tide is waiting for no man.
(d) Time and tide has waited for no man.
ANS: 0

16. Which one is the correct sentence?
(a) It is I who am responsible for this error.
(b) It is I who is responsible for this error.
(c) It is I who are responsible for this error.
(d) It is me who am responsible for this error.
ANS: 0

17. Which one is the correct sentence?
(a) Neither of the two proposals were accepted.
(b) Neither of the two proposals was accepted.
(c) Neither of the two proposal was accepted.
(d) Neither from the two proposals were accepted.
ANS: 1

18. Which one is the correct sentence?
(a) The Chairman and Managing Director have arrived.
(b) The Chairman and the Managing Director is arrived.
(c) The Chairman and Managing Director is arrived.
(d) The Chairman and Managing Director has arrived.
ANS: 3

19. Which one is the correct sentence?
(a) The Chairman and the Managing Director have arrived.
(b) The Chairman and the Managing Director has arrived.
(c) Chairman and Managing Director has arrived.
(d) The Chairman and Managing Director are arrived.
ANS: 0

20. Which one is the correct sentence?
(a) Cattle is grazing in the field near the river.
(b) Cattle are grazing in the field near the river.
(c) Cattles are grazing in the field near the river.
(d) A cattle is grazing in the field near the river.
ANS: 1

21. Which one is the correct sentence?
(a) He is senior than me in service.
(b) He is senior to me in service.
(c) He is senior from me in service.
(d) He is senior more than me in service.
ANS: 1

22. Which one is the correct sentence?
(a) She prefers tea than coffee.
(b) She prefers tea over coffee.
(c) She prefers tea to coffee.
(d) She prefers tea more than coffee.
ANS: 2

23. Which one is the correct sentence?
(a) He refrained to take any hasty decision.
(b) He refrained from taking any hasty decision.
(c) He refrained on taking any hasty decision.
(d) He refrained against taking any hasty decision.
ANS: 1

24. Which one is the correct sentence?
(a) The police insisted to inspect the luggage.
(b) The police insisted on inspecting the luggage.
(c) The police insisted for inspecting the luggage.
(d) The police insisted at inspecting the luggage.
ANS: 1

25. Which one is the correct sentence?
(a) I forbade him from going to the cinema.
(b) I forbade him not to go to the cinema.
(c) I forbade him to go to the cinema.
(d) I forbade him going to the cinema.
ANS: 2

26. Which one is the correct sentence?
(a) He was accused for stealing the watch.
(b) He was accused of stealing the watch.
(c) He was accused with stealing the watch.
(d) He was accused on stealing the watch.
ANS: 1

27. Which one is the correct sentence?
(a) The man died from cancer last month.
(b) The man died of cancer last month.
(c) The man died with cancer last month.
(d) The man died by cancer last month.
ANS: 1

28. Which one is the correct sentence?
(a) He died of overworking during the exam week.
(b) He died from overworking during the exam week.
(c) He died for overworking during the exam week.
(d) He died by overworking during the exam week.
ANS: 1

29. Which one is the correct sentence?
(a) You should comply with the instructions given.
(b) You should comply to the instructions given.
(c) You should comply by the instructions given.
(d) You should comply on the instructions given.
ANS: 0

30. Which one is the correct sentence?
(a) Paper is made of wood.
(b) Paper is made from wood.
(c) Paper is made with wood.
(d) Paper is made by wood.
ANS: 1

31. Which one is the correct sentence?
(a) This table is made from solid mahogany wood.
(b) This table is made of solid mahogany wood.
(c) This table is made by solid mahogany wood.
(d) This table is made out from solid mahogany wood.
ANS: 1

32. Which one is the correct sentence?
(a) He congratulated me for my brilliant success.
(b) He congratulated me on my brilliant success.
(c) He congratulated me at my brilliant success.
(d) He congratulated me with my brilliant success.
ANS: 1

33. Which one is the correct sentence?
(a) We discussed about the matter yesterday evening.
(b) We discussed the matter yesterday evening.
(c) We discussed on the matter yesterday evening.
(d) We discussed regarding the matter yesterday evening.
ANS: 1

34. Which one is the correct sentence?
(a) The committee is composed by seven members.
(b) The committee is composed of seven members.
(c) The committee is composed with seven members.
(d) The committee is composed from seven members.
ANS: 1

35. Which one is the correct sentence?
(a) He resides at Dhaka in Bangladesh.
(b) He resides in Dhaka at Bangladesh.
(c) He resides on Dhaka in Bangladesh.
(d) He resides at Dhaka on Bangladesh.
ANS: 0

36. Which one is the correct sentence?
(a) Divide the apples among the two brothers.
(b) Divide the apples between the two brothers.
(c) Divide the apples in between the two brothers.
(d) Divide the apples into the two brothers.
ANS: 1

37. Which one is the correct sentence?
(a) Distribute the sweets between all five students.
(b) Distribute the sweets among all five students.
(c) Distribute the sweets in all five students.
(d) Distribute the sweets to all five students equally.
ANS: 1

38. Which one is the correct sentence?
(a) He works hard lest he should fail in the examination.
(b) He works hard lest he will fail in the examination.
(c) He works hard lest he should not fail in the examination.
(d) He works hard lest he may fail in the examination.
ANS: 0

39. Which one is the correct sentence?
(a) Scarcely had I reached the station than the train left.
(b) Scarcely had I reached the station when the train left.
(c) Scarcely I had reached the station when the train left.
(d) Scarcely had I reached the station then the train left.
ANS: 1

40. Which one is the correct sentence?
(a) No sooner had the teacher entered the classroom when the students stood up.
(b) No sooner had the teacher entered the classroom then the students stood up.
(c) No sooner had the teacher entered the classroom than the students stood up.
(d) No sooner the teacher had entered the classroom than the students stood up.
ANS: 2

41. Which one is the correct sentence?
(a) Hardly had we started our journey than it began to rain.
(b) Hardly had we started our journey when it began to rain.
(c) Hardly we had started our journey when it began to rain.
(d) Hardly had we started our journey then it began to rain.
ANS: 1

42. Which one is the correct sentence?
(a) Unless you do not work hard, you will not succeed.
(b) Unless you work hard, you will succeed.
(c) Unless you work hard, you will not succeed.
(d) Unless you do work hard, you will fail not.
ANS: 2

43. Which one is the correct sentence?
(a) Although he is poor, but he is honest.
(b) Although he is poor, yet he is honest.
(c) Although he is poor, he is dishonest.
(d) Although he is poor, and he is honest.
ANS: 1

44. Which one is the correct sentence?
(a) Both Karim as well as Rahim went to the stadium.
(b) Both Karim and Rahim went to the stadium.
(c) Both Karim along with Rahim went to the stadium.
(d) Both Karim with Rahim went to the stadium.
ANS: 1

45. Which one is the correct sentence?
(a) Not only he but also his friends is attending the seminar.
(b) Not only he but also his friends are attending the seminar.
(c) Not only he or also his friends are attending the seminar.
(d) Not only he but his friends also is attending the seminar.
ANS: 1

46. Which one is the correct sentence?
(a) Since three hours, it has been raining continuously.
(b) It is raining continuously for three hours.
(c) It has been raining continuously for three hours.
(d) It has been raining continuously since three hours.
ANS: 2

47. Which one is the correct sentence?
(a) He has been living in Dhaka since 2015.
(b) He is living in Dhaka since 2015.
(c) He has been living in Dhaka for 2015.
(d) He lived in Dhaka since 2015.
ANS: 0

48. Which one is the correct sentence?
(a) The patient had died before the doctor came.
(b) The patient died before the doctor had come.
(c) The patient has died before the doctor came.
(d) The patient was died before the doctor came.
ANS: 0

49. Which one is the correct sentence?
(a) The doctor had come after the patient died.
(b) The doctor came after the patient had died.
(c) The doctor came after the patient died.
(d) The doctor has come after the patient had died.
ANS: 1

50. Which one is the correct sentence?
(a) If I was a king, I would help the poor.
(b) If I am a king, I would help the poor.
(c) If I were a king, I would help the poor.
(d) If I had been a king, I will help the poor.
ANS: 2

51. Which one is the correct sentence?
(a) Had I seen him before, I would have warned him.
(b) Had I seen him before, I would warn him.
(c) Had I seen him before, I will have warned him.
(d) If I saw him before, I would have warned him.
ANS: 0

52. Which one is the correct sentence?
(a) If you work hard, you would pass the exam.
(b) If you worked hard, you will pass the exam.
(c) If you work hard, you will pass the exam.
(d) If you had worked hard, you will pass the exam.
ANS: 2

53. Which one is the correct sentence?
(a) If he had studied attentively, he would pass the exam.
(b) If he studied attentively, he would have passed the exam.
(c) If he had studied attentively, he would have passed the exam.
(d) If he has studied attentively, he would have passed the exam.
ANS: 2

54. Which one is the correct sentence?
(a) I wish I was a famous poet.
(b) I wish I am a famous poet.
(c) I wish I were a famous poet.
(d) I wish I have been a famous poet.
ANS: 2

55. Which one is the correct sentence?
(a) He speaks as if he knows everything.
(b) He speaks as if he knew everything.
(c) He speaks as if he has known everything.
(d) He speaks as though he is knowing everything.
ANS: 1

56. Which one is the correct sentence?
(a) He spoke as if he knew everything.
(b) He spoke as if he had known everything.
(c) He spoke as if he knows everything.
(d) He spoke as if he was knowing everything.
ANS: 1

57. Which one is the correct sentence?
(a) It is time we change our habits.
(b) It is time we changed our habits.
(c) It is time we have changed our habits.
(d) It is high time we will change our habits.
ANS: 1

58. Which one is the correct sentence?
(a) I look forward to hear from you soon.
(b) I look forward to hearing from you soon.
(c) I look forward to have heard from you soon.
(d) I look forward hearing from you soon.
ANS: 1

59. Which one is the correct sentence?
(a) He is used to work hard late at night.
(b) He is used to working hard late at night.
(c) He used to working hard late at night.
(d) He is used working hard late at night.
ANS: 1

60. Which one is the correct sentence?
(a) Would you mind to open the door?
(b) Would you mind open the door?
(c) Would you mind opening the door?
(d) Would you mind in opening the door?
ANS: 2

61. Which one is the correct sentence?
(a) Walking along the road, a snake bit him.
(b) While he was walking along the road, a snake bit him.
(c) While walking along the road, a snake bit him.
(d) Walking on the road, he was bit by a snake.
ANS: 1

62. Which one is the correct sentence?
(a) Being a rainy day, we decided to stay at home.
(b) It being a rainy day, we decided to stay at home.
(c) Having a rainy day, we decided to stay at home.
(d) As being a rainy day, we decided to stay at home.
ANS: 1

63. Which one is the correct sentence?
(a) I saw a dead bird flying in the sky.
(b) Flying in the sky, I saw a dead bird.
(c) While flying in the sky, I saw a dead bird.
(d) I saw a bird flying dead in the sky.
ANS: 1

64. Which one is the correct sentence?
(a) Running fast, the goal was reached by the athlete.
(b) Running fast, the athlete reached the goal.
(c) Having run fast, the goal was reached by the athlete.
(d) Running fast, reaching the goal was done by the athlete.
ANS: 1

65. Which one is the correct sentence?
(a) The boy who works hard he will succeed.
(b) The boy who works hard will succeed.
(c) The boy that works hard he will succeed.
(d) The boy whom works hard will succeed.
ANS: 1

66. Which one is the correct sentence?
(a) This is the man whom I think is trustworthy.
(b) This is the man who I think is trustworthy.
(c) This is the man whose I think is trustworthy.
(d) This is the man which I think is trustworthy.
ANS: 1

67. Which one is the correct sentence?
(a) Let you and I go to the playground.
(b) Let you and he go to the playground.
(c) Let you and him go to the playground.
(d) Let I and you go to the playground.
ANS: 2

68. Which one is the correct sentence?
(a) Between you and I, he is a liar.
(b) Between you and me, he is a liar.
(c) Between he and you, he is a liar.
(d) Between you and him, I am a liar.
ANS: 1

69. Which one is the correct sentence?
(a) I, you and he are guilty.
(b) You, he and I are guilty.
(c) I, he and you are guilty.
(d) You, I and he are guilty.
ANS: 0

70. Which one is the correct sentence?
(a) You, he and I will go there tomorrow.
(b) I, you and he will go there tomorrow.
(c) He, you and I will go there tomorrow.
(d) You, I and he will go there tomorrow.
ANS: 0

71. Which one is the correct sentence?
(a) Each of the girls performed their duties well.
(b) Each of the girls performed her duties well.
(c) Each of the girl performed her duties well.
(d) Each of the girls performed ones duties well.
ANS: 1

72. Which one is the correct sentence?
(a) One should do his duty sincerely.
(b) One should do her duty sincerely.
(c) One should do one's duty sincerely.
(d) One should do their duty sincerely.
ANS: 2

73. Which one is the correct sentence?
(a) He availed of the opportunity without delay.
(b) He availed himself of the opportunity without delay.
(c) He availed himself the opportunity without delay.
(d) He availed the opportunity without delay.
ANS: 1

74. Which one is the correct sentence?
(a) She absent from the class yesterday.
(b) She absented herself from the class yesterday.
(c) She absented from the class yesterday.
(d) She was absented herself from the class yesterday.
ANS: 1

75. Which one is the correct sentence?
(a) All the members of the family love one another.
(b) All the members of the family love each other.
(c) The two brothers love one another dearly.
(d) All members of family love each other.
ANS: 0

76. Which one is the correct sentence?
(a) The two sisters help one another in times of need.
(b) The two sisters help each other in times of need.
(c) The two sisters helps each other in times of need.
(d) Two sisters help one another in times of need.
ANS: 1

77. Which one is the correct sentence?
(a) He asked me that why I was late.
(b) He asked me why was I late.
(c) He asked me why I was late.
(d) He asked me why I am late.
ANS: 2

78. Which one is the correct sentence?
(a) Tell me where do you live.
(b) Tell me where you live.
(c) Tell me where live you.
(d) Tell me that where you live.
ANS: 1

79. Which one is the correct sentence?
(a) Do you know where does he live?
(b) Do you know where he lives?
(c) Do you know where lives he?
(d) Do you know that where he lives?
ANS: 1

80. Which one is the correct sentence?
(a) He told that he would complete the task.
(b) He told me that he would complete the task.
(c) He said me that he would complete the task.
(d) He told to me that he would complete the task.
ANS: 1

81. Which one is the correct sentence?
(a) I have bought five furnitures for my new flat.
(b) I have bought five pieces of furniture for my new flat.
(c) I have bought five piece of furnitures for my new flat.
(d) I have bought five items of furnitures for my new flat.
ANS: 1

82. Which one is the correct sentence?
(a) The poet gave me some good advices.
(b) The poet gave me a good advice.
(c) The poet gave me a piece of good advice.
(d) The poet gave me many advices.
ANS: 2

83. Which one is the correct sentence?
(a) The scenery of Cox's Bazar are very charming.
(b) The sceneries of Cox's Bazar is very charming.
(c) The scenery of Cox's Bazar is very charming.
(d) The sceneries of Cox's Bazar are very charming.
ANS: 2

84. Which one is the correct sentence?
(a) He has given me ten thousand rupees.
(b) He has given me ten thousands rupees.
(c) He has given me ten thousands rupee.
(d) He has given me ten thousand of rupees.
ANS: 0

85. Which one is the correct sentence?
(a) Two-thirds of the work have been finished.
(b) Two-third of the work has been finished.
(c) Two-thirds of the work has been finished.
(d) Two-thirds of the works are finished.
ANS: 2

86. Which one is the correct sentence?
(a) Two-thirds of the students is present today.
(b) Two-thirds of the students are present today.
(c) Two-third of the students are present today.
(d) Two-thirds of student are present today.
ANS: 1

87. Which one is the correct sentence?
(a) He is relatively better today.
(b) He is comparatively better today.
(c) He is relatively well today.
(d) He is more relatively better today.
ANS: 2

88. Which one is the correct sentence?
(a) Dhaka is larger than any cities in Bangladesh.
(b) Dhaka is larger than any other city in Bangladesh.
(c) Dhaka is larger than all city in Bangladesh.
(d) Dhaka is larger than any other cities in Bangladesh.
ANS: 1

89. Which one is the correct sentence?
(a) Akbar was one of the greatest kings of India.
(b) Akbar was one of the greatest king of India.
(c) Akbar was greatest king of India.
(d) Akbar was one of great king of India.
ANS: 0

90. Which one is the correct sentence?
(a) No other boy in the class is as tall than he.
(b) No other boy in the class is so tall as he.
(c) No other boys in the class is as tall as he.
(d) No other boy in the class are as tall as he.
ANS: 1

91. Which one is the correct sentence?
(a) Shakespeare is greater than any poet in England.
(b) Shakespeare is greater than any other poet in England.
(c) Shakespeare is greater than all poet in England.
(d) Shakespeare is more greater than any other poet in England.
ANS: 1

92. Which one is the correct sentence?
(a) He is as clever as her.
(b) He is as clever as she.
(c) He is as clever like her.
(d) He is as clever than she.
ANS: 1

93. Which one is the correct sentence?
(a) The climate of Cox's Bazar is better than Dhaka.
(b) The climate of Cox's Bazar is better than that of Dhaka.
(c) The climate of Cox's Bazar is better than those of Dhaka.
(d) The climate of Cox's Bazar is better from Dhaka.
ANS: 1

94. Which one is the correct sentence?
(a) The roads of Chittagong are wider than Dhaka.
(b) The roads of Chittagong are wider than that of Dhaka.
(c) The roads of Chittagong are wider than those of Dhaka.
(d) The roads of Chittagong are wider from Dhaka.
ANS: 2

95. Which one is the correct sentence?
(a) He was hanged for murder yesterday.
(b) He was hung for murder yesterday.
(c) He was hunged for murder yesterday.
(d) He had hung for murder yesterday.
ANS: 0

96. Which one is the correct sentence?
(a) The coat was hung on the wall hook.
(b) The coat was hanged on the wall hook.
(c) The coat hunged on the wall hook.
(d) The coat was hang on the wall hook.
ANS: 0

97. Which one is the correct sentence?
(a) He lay on the bed for two hours yesterday.
(b) He lied on the bed for two hours yesterday.
(c) He laid on the bed for two hours yesterday.
(d) He was lain on the bed for two hours yesterday.
ANS: 0

98. Which one is the correct sentence?
(a) She laid the book on the table gently.
(b) She lay the book on the table gently.
(c) She lied the book on the table gently.
(d) She has lain the book on the table gently.
ANS: 0

99. Which one is the correct sentence?
(a) He spoke the truth and I also didn't lie.
(b) He spoke the truth, and I didn't lie neither.
(c) He spoke the truth and I didn't lie too.
(d) He spoke the truth, nor did I lie.
ANS: 3

100. Which one is the correct sentence?
(a) Hardly I had left the house when it started raining.
(b) No sooner I had left the house than it started raining.
(c) Had I left the house, it started raining.
(d) Scarcely had I left the house when it started raining.
ANS: 3
`;

let parsed = [];
const blocks = questionsText.trim().split('\n\n');
for (const block of blocks) {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const questionText = lines[0]; // e.g. "1. Which one is the correct sentence?"
    const optLines = lines.slice(1, -1);
    const ansLine = lines[lines.length - 1];
    const ansIdx = parseInt(ansLine.split(':')[1].trim(), 10);
    
    const options = optLines.map(o => o.replace(/^\([a-d]\)\s*/, ''));
    parsed.push({
        question: questionText,
        options: options,
        answer: ansIdx
    });
}
fs.writeFileSync('parsed_qs.json', JSON.stringify(parsed, null, 2), 'utf8');
console.log("Parsed " + parsed.length + " questions.");
