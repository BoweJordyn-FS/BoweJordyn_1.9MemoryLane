---
title: 'What is Password Hashing?'
date: 'June 28, 2026'
excerpt: 'What is password hashing and why should you use it?'
heroImage: '/sasun-bughdaryan-2T4l02ZYj-k-unsplash.jpg'
---

Password hashing is a crucial aspect of password management. It’s a one-way cryptographic transformation that converts a plain-text password into a fixed-length string of characters. Unlike encryption, hashing can’t be reversed. You can’t go from a hash back to the original password. When a user creates an account, instead of storing the password in plain text, systems store only the hash and verify login attempts by hashing what the user types and comparing the result. If they match, the user is authenticated.

> Encryption is the process of scrambling plaintext into an unreadable secret code using cryptographic algorithms and digital keys.

### Reasons to Use Password Hashing

**Enhanced Security:** If an attacker gets hold of hashed passwords, it is very hard to change them back into the original passwords, especially when using strong hashing methods like bcrypt. Adding salt to the hash makes it even more secure.

**Baseline Security Standard:** Storing passwords in plain text is unsafe. Laws like GDPR and standards such as SOC 2 require that we protect passwords properly. If a database is hacked, users' passwords are at risk. Hashing keeps passwords in a format that is hard to read, which helps prevent data breaches.

**Protects Users Across Devices:** Many people reuse passwords across different sites. If a breach exposes plain-text passwords, attackers can use them on other accounts, like Gmail or banking sites. Hashing helps delay this kind of attack.

### What is Salting?

Good password hashing includes a salt, which is a random value added to each password before hashing. This is important because people often use the same password for different sites. By using a salt, even if two users have the same password, they will have different hashes. This helps protect against attacks using precomputed "rainbow tables." Password hashing methods like bcrypt, Argon2, and scrypt automatically add this salt.

_(2024, June 25). What is Password Hashing and why is it important. SuperTokens. https://supertokens.com/blog/password-hashing-salting_
