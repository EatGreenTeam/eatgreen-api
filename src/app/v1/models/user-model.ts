// import { subscribe } from "diagnostics_channel";
// import { UserType } from "../../global/utils/constants";
// import {
//   DocumentData,
//   DocumentSnapshot,
//   SnapshotOptions,
// } from "firebase/firestore";

// export class User {
//   constructor(
//     public id: string,
//     public username: string,
//     public email: string,
//     public password: string,
//     public type: UserType,
//     public joinedAt: Date,
//     public subscribed: boolean,
//     public expirationDate: Date | null,
//     public trackingCode?: string | null
//   ) {}

//   toJson() {
//     return {
//       id: this.id,
//       username: this.username,
//       email: this.email,
//       // ommited password for security issue
//       // password: this.password,
//       type: this.type,
//       subscribed: this.subscribed,
//       expirationDate:
//         this.expirationDate != null ? this.expirationDate.toISOString() : null,
//       joinedAt: this.joinedAt.toISOString(), // Serialize Date to string
//       ...(this.type === UserType.Candidate && {
//         trackingCode: this.trackingCode,
//       }),
//     };
//   }
// }

// export const userConverter = {
//   toFirestore(user: User): DocumentData {
//     const {
//       username,
//       email,
//       password,
//       type,
//       joinedAt,
//       subscribed,
//       expirationDate,
//       trackingCode,
//     } = user;
//     return {
//       username,
//       email,
//       password,
//       type,
//       joinedAt,
//       subscribed,
//       expirationDate,
//       ...(type == UserType.Candidate && {
//         trackingCode,
//       }),
//     };
//   },
//   fromFirestore(
//     snapshot: DocumentSnapshot,
//     options?: SnapshotOptions | undefined
//   ): User {
//     const data = snapshot.data(options)!;

//     const {
//       username,
//       email,
//       password,
//       type,
//       joinedAt,
//       subscribed,
//       expirationDate,
//       trackingCode,
//     } = data;
//     return new User(
//       snapshot.id,
//       username,
//       email,
//       password,
//       type,
//       new Date(joinedAt),
//       subscribed,
//       expirationDate != null ? new Date(expirationDate) : null, // Parse Date from Firestore
//       type === UserType.Candidate ? trackingCode : null
//     );
//   },
// };
