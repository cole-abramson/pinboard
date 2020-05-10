set -e

pushd Pinboard
react-native run-ios --configuration="Release" --device="Oliver's iPad"
popd
