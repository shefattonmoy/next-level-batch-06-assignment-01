1. What are some differences between interfaces and types in TypeScript? 
   Answer: টাইপস্ক্রিপ্টে ইন্টারফেস এবং টাইপ উভয়ই টাইপ ডেফিনিশন করার জন্য আমরা ব্যবহার করি। নিচে Type এবং Interface এর কিছু পার্থক্য দেওয়া হলঃ 
   
   -----Type:----- 
   i. Type যেকোন ধরনের type কেই ডিফাইন করতে পারে, হোক সেটা primitive type, union, tuple অথবা intersection। 
   ii. Complex type operation পারফর্ম করার জন্য Type ব্যবহার করতে পারি। 
   iii. Type কখনোই declaration merging সাপোর্ট করে না। Declaration Merging হচ্ছে এমন একটি ফিচার যেখানে একই নামের multiple interface ডিক্লেয়ার করা হলে সেগুলো automatically merge হয়ে একটি single interface এ পরিবর্তিত হয়। 
   iv. Extend করার জন্য & কীওয়ার্ড ব্যবহার করা হয়।
   
   
   -----Intersection:----- 
   i. Object এর structure ডিফাইন করার জন্য interface ব্যবহার করা হয়। 
   ii. Declaration Merging সাপোর্ট করে। অর্থাৎ multiple interface ডিক্লেয়ার করা হলে সেগুলো automatically merge হয়ে একটি single interface এ পরিবর্তিত হয়। 
   iii. Extend করার জন্য extends কীওয়ার্ড ব্যবহার করা হয়। 
   iv. Class ইমপ্লিমেন্টেশনের জন্য অধিক উপযোগী।



2. Explain the difference between any, unknown, and never types in TypeScript. 
   Answer: টাইপস্ক্রিপ্টে any, unknown এবং never সকলেই ভিন্ন ভিন্ন টাইপ ডিফাইন করার জন্য ব্যবহৃত হয় এবং প্রত্যেকটি টাইপেরই কিছু সুনির্দিষ্ট বৈশিষ্ট্য রয়েছে। নিচে এদের মাঝে পার্থক্য তুলে ধরা হলোঃ 
   
   
   -----Any:----- 
   i. Type checking সম্পর্কিত কোনো ইস্যু নেই। যেকোন টাইপ অ্যাসাইন করা যায়। 
   ii. যেকোন property অ্যাকসেস করা যায়। 
   iii. টাইপস্ক্রিপ্টের safety feature কে বাইপাস করার ক্ষমতা এই কীওয়ার্ডের আছে।
   
   
   -----Unknown:----- 
   i. Unknown হচ্ছে 'Any' কীওয়ার্ডের একটি type safety varient। যেহেতু এটি any কীওয়ার্ডের type safety varient, তাই এটি নিশ্চিতভাবে type safety মেইনটেইন করে। 
   ii. সরাসরি কোনো অপারেশনের জন্য Unknown কীওয়ার্ড ব্যবহার করা যায় না। 
   iii. Type checking এর পরে এটিকে ব্যবহার করতে হয়।
   
   
   -----Never:----- 
   i. কোনো ভ্যালু অ্যাসাইন করা যায় না। 
   ii. Never সবসময় প্রোগ্রামে কোনো exception বা infinite loop এর সময় exception throw করার কাজে ব্যবহৃত হয়। 
   iii. যখন আমরা প্রোগ্রামে কোনো ভ্যালু এক্সপেক্ট করি না, তখন সেইফ থাকার জন্য আমরা never কীওয়ার্ড ব্যবহার করি।