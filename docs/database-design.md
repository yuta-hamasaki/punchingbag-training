# Database Design

予定モデルはUser、UserProfile、Workout、WorkoutRound、Combination、WorkoutCombination、WorkoutSession、SessionRound、FavoriteWorkout、CustomWorkout、CustomWorkoutRound、Subscription、UserConsentです。

CameraAnalysisとTechniqueEventは将来拡張用に設計します。WorkoutSessionは`SessionMode`を持ち、`detectedPunches`、`leftPunches`、`rightPunches`、`activeSeconds`をnullableで保持します。MVPではこれらを常にnullにします。
